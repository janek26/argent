import { FC, forwardRef } from "react"
import { DefaultTheme, StyledComponentProps } from "styled-components"

import { Input } from "../Input"
import { Error, InputFieldWrapper } from "./InputField.style"

interface InputFieldProps
  extends StyledComponentProps<"input", DefaultTheme, {}, never> {
  error: string
}

export const InputField: FC<InputFieldProps> = forwardRef(
  ({ error, ...props }, ref) => (
    <InputFieldWrapper>
      <Input ref={ref} {...props} />
      {error && <Error>{error}</Error>}
    </InputFieldWrapper>
  ),
)
