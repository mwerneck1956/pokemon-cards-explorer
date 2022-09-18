import "@testing-library/jest-dom/extend-expect";
import { mswServer } from "./mocks/msw/mswServer";

beforeAll(() => {
  mswServer.listen();
});

afterAll(() => {
  mswServer.close();
});

afterAll(() => {
  mswServer.resetHandlers();
});
