import { RootState } from '../store';

export const SelectTheme = (state: RootState) => state.theme.theme;
export const SelectFont = (state: RootState) => state.theme.font;
