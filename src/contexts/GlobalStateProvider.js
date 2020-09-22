import React from 'react'
import { TemplateProvider } from './TemplateContext'

export default ({ children }) => (
  <TemplateProvider>
      {children}
  </TemplateProvider>
)