import axios from "axios";
import { getHttp } from "./index";

describe("http GET", () => {
  let axiosGetSpy: jest.SpyInstance;

  beforeAll(() => {
    axiosGetSpy = jest.spyOn(axios, "get");
  });

  it("should get the data from an URL", async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    await getHttp(url);

    expect(axios.get).toHaveBeenCalledWith(url);
    expect(axiosGetSpy)
  });
});
