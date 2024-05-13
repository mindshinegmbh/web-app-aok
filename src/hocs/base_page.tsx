import React, { useContext } from 'react';
import Header from 'components/header';
import { ThemeContext } from 'styling/themes';
import { Background } from 'styling/common';

export interface BaseProps {
  isSettingsVisible: boolean;
}

function withBase<P extends object>(Component: React.ComponentType<P>): React.FC<P & BaseProps> {
  const WrappedComponent: React.FC<P & BaseProps> = (props: BaseProps) => {
    const theme = useContext(ThemeContext);

    return (
      <Background
        data-testid={'background'}
        $backgroundColor={theme.colors.screen_background}
      >
        <Header isSettingsVisible={props.isSettingsVisible} />
        <Component {...props as P} />
      </Background>
    );
  };

  const componentName = Component.displayName || Component.name || 'Component';
  WrappedComponent.displayName = `withBase(${componentName})`;

  return WrappedComponent;
}

export default withBase;
