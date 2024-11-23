import { NavigatorScreenParams } from '@react-navigation/native';

export type DrawerParamList = {
  Home: undefined;
  About: undefined;
  Login: undefined;
};

export type RootParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
};
