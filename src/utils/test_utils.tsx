import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from '../internationalization/locales/de.json';

import type { AppStore, RootState } from '../localredux/store';
import { setupStore } from '../localredux/store';
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    store = setupStore(),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export function initI18n() {
  i18n.use(initReactI18next).init({
    lng: 'de',
    fallbackLng: 'de',
    ns: ['de'],
    defaultNS: 'de',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      de: de,
    },
  });
}

export function addI18nResources(resource = {}, { ns = 'de', lang = 'de' } = {}) {
  i18n.addResourceBundle(lang, ns, resource, true, true);
}
