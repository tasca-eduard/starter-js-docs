import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const GITHUB_URL = "https://github.com/tasca-eduard/starter-js-docs";

const config: DocsThemeConfig = {
  logo: <span>Starter JS</span>,
  project: {
    link: 'https://github.com/tasca-eduard/starter-js-docs',
  },
  footer: {
    text: 'Started JS Docs',
  },
  feedback: {
    useLink: () => `${GITHUB_URL}/issues/new?title=${useConfig().title}: Issue / Question`
  }
}

export default config;