type User = {
  id: number
  name: string
  balance: number
  invoices: number
}

type CreditCardInfo = {
  cardNumber: string
  expirationDate: string
  cardHolder: string
  cvv: string
  zipCode: string
}

type Database = {
  user: User
  creditCard: CreditCardInfo
}

const initialData: Database = {
  user: {
    id: 123,
    name: 'Michelle',
    balance: 400.00,
    invoices: 2,
  },
  creditCard: {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolder: '',
    zipCode: '',
  },
}

class MockService {
  private database: Database = initialData

  async getUserInfo(): Promise<User> {
    await this.sleep()
    return this.database.user
  }

  async saveCreditCardInfo(creditCard: CreditCardInfo): Promise<void> {
    await this.sleep()
    this.database.creditCard = creditCard
  }

  // sleep to act like a network
  private sleep(durationMs = 500) {
    return new Promise((resolve) => setTimeout(resolve, durationMs))
  }
}

export const mockService = new MockService()
