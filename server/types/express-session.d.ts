import 'express-session';

declare module 'express-session' {
  interface SessionData {
    currentId: any;
  }
}
