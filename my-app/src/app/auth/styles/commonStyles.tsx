// styles.ts
import { theme, Grid } from 'antd';

// token 타입 추론
export type TokenType = ReturnType<typeof theme.useToken>['token'];
export type ScreensType = ReturnType<typeof Grid.useBreakpoint>;

export const getStyles = (token: TokenType, screens: ScreensType) => ({
  section: {
    alignItems: 'center',
    backgroundColor: token.colorBgContainer,
    display: 'flex',
    padding: '0px',
    height: '100vh',
  },
  container: {
    margin: '0 auto',
    padding: screens.md
      ? `${token.paddingXL}px`
      : `${token.sizeXXL}px ${token.padding}px`,
    width: '380px',
  },
  header: {
    marginBottom: '12px',
  },
  text: {
    color: token.colorTextSecondary,
  },
  footer: {
    marginTop: token.marginLG,
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  forgotPassword: {
    float: 'right',
  },
  logo: {
    width: 'auto',
    height: '24px',
  },
  form: {
    item: { marginBottom: '30px' },
    input: { padding: '10px' },
  },
});
