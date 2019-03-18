import React, { useContext } from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';

export const IntlContext = React.createContext<InjectedIntl>(
  {} as InjectedIntl
);

export const InjectIntlContext = injectIntl(({ intl, children }) => {
  return <IntlContext.Provider value={intl}>{children}</IntlContext.Provider>;
});

export const useFormatMessage = () => {
  const intl = useContext(IntlContext);
  return intl.formatMessage;
};
