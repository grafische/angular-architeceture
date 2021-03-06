export enum Message {
  FormSuccess = "Formularz wysłany. Dziękujemy",
  FormInValid = "Formularz nie został wysłany. Sprawdź czy wypełniłeś wemagane pola.",
  InputRequire = "Pole jest wymagane",
  InputPatternNoSign = "Pole zawiera nie dozwolone znaki",
  FormError = "Formularz nie został wysłany. Przepraszamy.",
  FormErrorNotSendEmploye = "Niestety nie udało się wysłać potwierdzenia zgłoszenia na Twój adres e-mail.",
  FormErrorNotSendSuperior = "Nie powiodło się przesłanie Twojego zgłoszenia do Twojego przełożonego.",
  FormErrorNotSendHR = "Nie udało się wysłać zgłoszenia do Działu Kadr z Twoim urlopem.",
  FormErrorDateOverLoad = "Nie udało się zapisać zgłoszenia. Wybrana data koliduje z innym urlopem danego pracownika.",
  AsyncError = "Przepraszamy, coś poszło nie tak.",
  ChooseType = "Wybierz dział",
  AllType = "Wszystkie rodzaje",
  VactionCurrent = "aktualny",
  VactionPlanned = "planowany",
  UnAvailable = "jest nie obecny"
}
