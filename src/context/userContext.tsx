import { mockService } from '@data/mockService'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useEffect
} from 'react'


type User = {
  id: number
  name: string
  balance: number
  invoices: number
}

type CreditCardInfo = {
  cardNumber: string
  expirationDate: string
  cvv: string
  cardHolder: string
  zipCode: string
}

type UserContextType = {
  userInfo: User | null
  creditCardInfo: CreditCardInfo | null
  setUserInfo: Dispatch<SetStateAction<User | null>>
  setCreditCardInfo: Dispatch<SetStateAction<CreditCardInfo | null>>
}

type UserProviderProps = {
  children: ReactNode
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: UserProviderProps ) => {
  const [userInfo, setUserInfo] = useState<User | null>(null)
  const [creditCardInfo, setCreditCardInfo] = useState<CreditCardInfo | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await mockService.getUserInfo()
      setUserInfo(userData);
    };
    fetchUser()
  }, [])

  const value = { userInfo, setUserInfo, creditCardInfo, setCreditCardInfo }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
