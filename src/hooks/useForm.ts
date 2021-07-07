import { useCallback, useState, FormEventHandler } from "react"

type FormValue = {
  value: string | number | boolean
  errors: string[]
  validators: {
    method: (value: string | number | boolean) => boolean
    errorMsg: string
  }[]
}

export type FormFields<T extends string> = Record<T, FormValue>

export default <T extends string>(
  initialFields: FormFields<T>,
  onSubmit: (fields: FormFields<T>) => void
) => {
  const [fields, setFields] = useState(initialFields)

  const getFieldValue = useCallback(
    (name: keyof typeof fields) => fields[name].value,
    [fields]
  )

  const setFieldValue = useCallback(
    (name: keyof typeof fields, value: string | number | boolean) =>
      setFields((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      })),
    [setFields]
  )

  const getFieldErrors = useCallback(
    (name: keyof typeof fields) => fields[name].errors,
    [fields]
  )

  const addFieldErrors = useCallback(
    (name: keyof typeof fields, error: string) =>
      setFields((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          errors: prev[name].errors.includes(error)
            ? prev[name].errors
            : [...prev[name].errors, error],
        },
      })),
    [setFields]
  )

  const removeFieldErrors = useCallback(
    (name: keyof typeof fields, error: string) =>
      setFields((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          errors: prev[name].errors.filter((err) => err !== error),
        },
      })),
    [setFields]
  )

  const validateField = useCallback(
    (name: keyof typeof fields) => {
      const { value, validators } = fields[name]
      let isValid = true

      validators.forEach(({ method, errorMsg: msg }) => {
        if (method(value)) {
          removeFieldErrors(name, msg)
        } else {
          addFieldErrors(name, msg)
          isValid = false
        }
      })
      return isValid
    },
    [addFieldErrors, removeFieldErrors, fields]
  )

  const isFormValid = useCallback(() => {
    const names = Object.keys(fields) as T[]
    return names.reduce((isValid, name) => {
      const isCurrentFieldValid = validateField(name)
      return isValid && isCurrentFieldValid
    }, true)
  }, [fields, validateField])

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault()

      if (isFormValid()) {
        onSubmit(fields)
        setFields(initialFields)
      }
    },
    [onSubmit, fields, isFormValid, initialFields]
  )

  return {
    setFieldValue,
    getFieldValue,
    getFieldErrors,
    handleSubmit,
  }
}
