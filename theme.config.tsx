import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const GITHUB_URL = "https://github.com/tasca-eduard/starter-js-docs";

const config: DocsThemeConfig = {
  logo: <span>Starter JS</span>,
  project: {
    link: GITHUB_URL,
  },
  footer: {
    text: 'Started JS Docs',
  },
  feedback: {
    useLink: () => `${GITHUB_URL}/issues/new?title=${useConfig().title}: Issue / Question`
  },
  editLink: {
    component: undefined
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s"
    }
  },
  banner: {
    key: "0.1-release",
    text: <span><i>Starter JS Docs</i> is in <strong>Alpha Release</strong>, anything can be changed at any time. <strong>Feedback</strong> is well appreciated.</span>
  }
}

export default config;