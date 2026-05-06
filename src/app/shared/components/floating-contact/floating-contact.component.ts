import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { environment } from '../../../../environments/environment';

type Channel = 'telegram' | 'whatsapp' | 'instagram' | 'vk' | 'phone' | 'sms';

interface ChannelOption {
  id: Channel;
  labelKey: string;
  color: string;
}

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './floating-contact.component.html',
  styleUrls: ['./floating-contact.component.scss']
})
export class FloatingContactComponent implements OnDestroy {
  modalOpen = false;
  selectedChannel: Channel | null = null;
  message = '';
  name = '';
  activeIconIndex = 0;
  private rotationInterval = 0;

  readonly channels: ChannelOption[] = [
    { id: 'telegram', labelKey: 'FLOATING_CONTACT.TELEGRAM', color: '#2CA8E0' },
    { id: 'whatsapp', labelKey: 'FLOATING_CONTACT.WHATSAPP', color: '#25D366' },
    { id: 'instagram', labelKey: 'FLOATING_CONTACT.INSTAGRAM', color: '#C13584' },
    { id: 'vk', labelKey: 'FLOATING_CONTACT.VK', color: '#4A76A8' },
    { id: 'phone', labelKey: 'FLOATING_CONTACT.PHONE', color: '#FF6B6B' },
    { id: 'sms', labelKey: 'FLOATING_CONTACT.SMS', color: '#6C63FF' }
  ];

  constructor() {
    this.startIconRotation();
  }

  get currentButtonIcon(): ChannelOption {
    return this.channels[this.activeIconIndex];
  }

  ngOnDestroy(): void {
    window.clearInterval(this.rotationInterval);
  }

  openModal(): void {
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.resetForm();
  }

  selectChannel(channel: Channel): void {
    this.selectedChannel = channel;
  }

  sendMessage(): void {
    if (!this.selectedChannel) {
      return;
    }

    const link = this.buildUrl(this.selectedChannel);
    if (!link) {
      return;
    }

    if (this.selectedChannel === 'phone' || this.selectedChannel === 'sms') {
      window.location.href = link;
    } else {
      window.open(link, '_blank');
    }

    this.closeModal();
  }

  getChannelLabel(channel: Channel): string {
    return this.channels.find(item => item.id === channel)?.labelKey ?? channel;
  }

  private buildUrl(channel: Channel): string {
    switch (channel) {
      case 'telegram':
        return this.getTelegramLink();
      case 'whatsapp':
        return this.getWhatsAppLink();
      case 'instagram':
        return this.getInstagramLink();
      case 'vk':
        return this.getVKLink();
      case 'phone':
        return this.getPhoneLink();
      case 'sms':
        return this.getSmsLink();
      default:
        return '';
    }
  }

  private getTelegramLink(): string {
    const username = environment.contacts.telegram;
    if (!username) {
      return '';
    }

    return `https://t.me/${username}?text=${this.buildMessage()}`;
  }

  private getWhatsAppLink(): string {
    const whatsappNumber = environment.contacts.whatsapp;
    if (!whatsappNumber) {
      return '';
    }

    return `https://wa.me/${whatsappNumber}?text=${this.buildMessage()}`;
  }

  private getInstagramLink(): string {
    const instagramProfile = environment.contacts.instagram;
    if (!instagramProfile) {
      return '';
    }

    return `https://instagram.com/${instagramProfile}`;
  }

  private getVKLink(): string {
    const vkProfile = environment.contacts.vk;
    if (!vkProfile) {
      return '';
    }

    return `https://vk.com/${vkProfile}`;
  }

  private getPhoneLink(): string {
    const phoneNumber = environment.contacts.phone;
    if (!phoneNumber) {
      return '';
    }

    return `tel:${phoneNumber}`;
  }

  private getSmsLink(): string {
    const phoneNumber = environment.contacts.phone;
    if (!phoneNumber) {
      return '';
    }

    return `sms:${phoneNumber}?body=${this.buildMessage()}`;
  }

  private buildMessage(): string {
    const parts: string[] = [];

    if (this.name.trim()) {
      parts.push(`Name: ${this.name.trim()}`);
    }

    if (this.message.trim()) {
      parts.push(this.message.trim());
    }

    return encodeURIComponent(parts.join(' | '));
  }

  private resetForm(): void {
    this.selectedChannel = null;
    this.message = '';
    this.name = '';
  }

  private startIconRotation(): void {
    this.rotationInterval = window.setInterval(() => {
      this.activeIconIndex = (this.activeIconIndex + 1) % 3;
    }, 2400);
  }
}
