export class Pixel {
  static phoneNumberClick() {
    window?.fbq("track", "phone_number_click");
  }

  static emailClick() {
    window?.fbq("track", "email_click");
  }

  static sendMessageSuccess() {
    window?.fbq("track", "message_send_error");
  }

  static sendMessageError() {
    window?.fbq("track", "message_send_error");
  }

  static localizationClick() {
    window?.fbq("track", "localization_click");
  }

  static openingHoursClick() {
    window?.fbq("track", "opening_hours_click");
  }
}
