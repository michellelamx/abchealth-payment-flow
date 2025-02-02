import { CreditCardForm } from '@components/CreditCardForm'
import { ReviewAndPay } from '@components/ReviewAndPay'
import { ReactNode, useState } from 'react'
import styles from './main.module.css'


export const PaymentPage = () => {
  const [activeSection, setActiveSection] = useState<number | null>(1)
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const handleFormSubmit = () => {
    setIsFormValid(true)
  };

  const handleContinue = () => {
    if (isFormValid) {
      setActiveSection(2)
    }
  }

  const editSection = (sectionNumber: number) => {
    setActiveSection(sectionNumber)
  }

  return (
    <div className={styles.paymentContainer}>
      <AccordionSection
        isActive={activeSection === 1}
        title='Payment information'
        sectionNumber={1}
        onClick={editSection}
      >
        <CreditCardForm
          onFormSubmit={handleFormSubmit}
          onContinue={handleContinue}
          isFormValid={isFormValid}
        />
      </AccordionSection>
      <AccordionSection
        isActive={activeSection === 2}
        title='Review and pay'
        sectionNumber={2}
      >
        <ReviewAndPay />
      </AccordionSection>
    </div>
  )
}

type AccordionSectionProps = {
  title: string
  sectionNumber: number
  isActive: boolean
  children: ReactNode | string
  onClick?: (sectionNumber: number) => void
}

const AccordionSection = ({
  title,
  sectionNumber,
  isActive,
  onClick,
  children
}: AccordionSectionProps) => {

  const handleEditClick = () => {
    if (onClick) {
      onClick(sectionNumber)
    }
  }

  return (
    <section
      aria-expanded={isActive ? 'true' : undefined}
      aria-hidden={isActive ? 'false' : undefined}
      className={`${styles.paymentSection} ${isActive ? styles.openSection : styles.closedSection}`}
    >
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <div className={styles.sectionNumber}>{sectionNumber}</div>
          {title}
        </div>
        {!isActive && onClick && (
          <div
            className={styles.editLink}
            onClick={handleEditClick}
          >
            Edit
          </div>
        )}
      </div>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  )
}
