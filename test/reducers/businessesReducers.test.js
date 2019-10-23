import {
  businessesReducer,
  businessReducer,
  userBusinessReducer,
  searchReducer
} from "../../src/reducers/businessesReducers";
import * as types from "../../src/actions/actionTypes";

describe("business reducers tests suites", () => {
  const businessesInitialState = { data: [], isLoading: false };

  describe("fetch all businesses reducer", () => {
    it("should the initial state", () => {
      expect(businessesReducer(undefined, {})).toEqual(businessesInitialState);
    });

    it("should handle FETCH_ALL_BUSINESSES_SUCCESS action type", () => {
      expect(
        businessesReducer(businessesInitialState, {
          businesses: [
            {
              category: "Technology",
              location: "Nairobi",
              name: "Andela",
              summary: "A description for this business goes here"
            },
            {
              category: "Technology",
              location: "Carlifonia",
              name: "Facebook",
              summary: "A description for this business goes here"
            },
            {
              category: "Motorcars",
              location: "Carlifonia",
              name: "Tesla",
              summary: "A description for this business goes here"
            }
          ],
          type: types.FETCH_ALL_BUSINESSES_SUCCESS
        })
      ).toEqual({
        data: [
          {
            category: "Technology",
            location: "Nairobi",
            name: "Andela",
            summary: "A description for this business goes here"
          },
          {
            category: "Technology",
            location: "Carlifonia",
            name: "Facebook",
            summary: "A description for this business goes here"
          },
          {
            category: "Motorcars",
            location: "Carlifonia",
            name: "Tesla",
            summary: "A description for this business goes here"
          }
        ],
        isLoading: false
      });
    });

    it("should handle FETCH_ALL_BUSINESSES_FAIL action", () => {
      expect(
        businessesReducer(
          {},
          {
            error: {
              response_message: "There is an internal server error!",
              status_code: 500
            },
            type: types.FETCH_ALL_BUSINESSES_FAIL
          }
        )
      ).toEqual({
        response_message: "There is an internal server error!",
        status_code: 500
      });
    });
  });

  describe("fetch business by ID reducer", () => {
    it("it should return the initial state", () => {
      expect(businessReducer(undefined, {})).toEqual({});
    });

    it("should handle FETCH_BUSINESSES_BY_ID_SUCCESS action", () => {
      expect(
        businessReducer(
          {},
          {
            business: {
              category: "Technology",
              location: "Carlifonia",
              name: "Facebook",
              summary: "A description for this business goes here"
            },
            type: types.FETCH_BUSINESSES_BY_ID_SUCCESS
          }
        )
      ).toEqual({
        category: "Technology",
        location: "Carlifonia",
        name: "Facebook",
        summary: "A description for this business goes here"
      });
    });

    it("should handle FETCH_BUSINESSES_BY_ID_FAIL action", () => {
      expect(
        businessReducer(
          {},
          {
            error: {
              response_message: "This business does not exists!",
              status_code: 404
            },
            type: types.FETCH_BUSINESSES_BY_ID_FAIL
          }
        )
      ).toEqual({
        response_message: "This business does not exists!",
        status_code: 404
      });
    });
  });

  describe("fetch businesses by creator ID", () => {
    it("should return the initial state", () => {
      expect(userBusinessReducer(undefined, {})).toEqual([]);
    });

    it("should handle FETCH_BUSINESSES_BY_USER_ID_SUCCESS action", () => {
      expect(
        userBusinessReducer([], {
          type: types.FETCH_BUSINESSES_BY_USER_ID_SUCCESS,
          userBusinesses: [
            {
              category: "Technology",
              created_by: 1,
              location: "Nairobi",
              name: "Andela",
              summary: "A description for this business goes here"
            },
            {
              category: "Technology",
              created_by: 1,
              location: "Carlifonia",
              name: "Facebook",
              summary: "A description for this business goes here"
            }
          ]
        })
      ).toEqual([
        {
          category: "Technology",
          created_by: 1,
          location: "Nairobi",
          name: "Andela",
          summary: "A description for this business goes here"
        },
        {
          category: "Technology",
          created_by: 1,
          location: "Carlifonia",
          name: "Facebook",
          summary: "A description for this business goes here"
        }
      ]);
    });

    it("should handle FETCH_BUSINESSES_BY_USER_ID_FAIL action", () => {
      expect(
        userBusinessReducer(
          {},
          {
            error: {
              response_message: "You have not registered a business!",
              status_code: 204
            },
            type: types.FETCH_BUSINESSES_BY_USER_ID_FAIL
          }
        )
      ).toEqual({
        response_message: "You have not registered a business!",
        status_code: 204
      });
    });
  });

  describe("test search businesses reducer", () => {
    it("it should return the initial state", () => {
      expect(searchReducer(undefined, {})).toEqual([]);
    });

    it("should handle SEARCH_BUSINESSES_SUCCESS action type", () => {
      expect(
        searchReducer([], {
          businesses: [
            {
              category: "Technology",
              location: "Nairobi",
              name: "Andela",
              summary: "A description for this business goes here"
            },
            {
              category: "Technology",
              location: "Carlifonia",
              name: "Facebook",
              summary: "A description for this business goes here"
            },
            {
              category: "Motorcars",
              location: "Carlifonia",
              name: "Tesla",
              summary: "A description for this business goes here"
            }
          ],
          type: types.SEARCH_BUSINESSES_SUCCESS
        })
      ).toEqual([
        {
          category: "Technology",
          location: "Nairobi",
          name: "Andela",
          summary: "A description for this business goes here"
        },
        {
          category: "Technology",
          location: "Carlifonia",
          name: "Facebook",
          summary: "A description for this business goes here"
        },
        {
          category: "Motorcars",
          location: "Carlifonia",
          name: "Tesla",
          summary: "A description for this business goes here"
        }
      ]);
    });
  });
});
