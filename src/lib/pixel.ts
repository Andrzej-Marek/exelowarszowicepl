export class Pixel {
  static phoneNumberClick() {
    window?.fbq("track", "phone_number_click");
  }

  static emailClick() {
    window?.fbq("track", "email_click");
  }

  static localizationClick() {
    window?.fbq("track", "localization_click");
  }

  static openingHoursClick() {
    window?.fbq("track", "opening_hours_click");
  }
}
