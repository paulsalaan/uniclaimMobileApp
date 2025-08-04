export type RootStackParamList = {
  Index: undefined;
  OnBoarding: undefined;
  App: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Report: undefined;
  Profile: undefined;
  MyTicket: undefined;
  Message: undefined;
  RootBottomTabs: undefined;
  InitialRouter: undefined;
  PostDetailsScreen: undefined;
};

export type Post = {
  id: string;
  type: "lost" | "found";
  category: string;
  status?: "keep" | "turnover";
  image: any;
  title: string;
  location: string;
  datetime: string;
  description: string;
  postedBy: string; // 👈 Add this
};
