import {
  businessesReducer,
  businessReducer,
  userBusinessReducer,
  searchReducer
} from "../../src/reducers/businessesReducers";
import * as types from "../../src/actions/actionTypes";
import { businesses } from "../../fixtures/businesses";

describe("Business Reducer", () => {
  let businessesInitialState = { data: [], isLoading: false };

  describe("fetch all businesses reducer", () => {
    it("should the initial state", () => {
      expect(businessesReducer(undefined, {})).toEqual(businessesInitialState);
    });

    it("should handle FETCH_ALL_BUSINESSES_SUCCESS action type", () => {
      expect(
        businessesReducer(businessesInitialState, {
          businesses: businesses,
          type: types.FETCH_ALL_BUSINESSES_SUCCESS
        })
      ).toEqual({
        data: businesses,
        isLoading: false
      });
    });

    it("should handle REGISTER_BUSINESS_SUCCESS", () => {
      const newBusiness = {
        id: 4,
        category: "Education",
        location: "Kigali",
        name: "Slang",
        summary: "A description for this business goes here"
      };

      expect(
        businessesReducer(businessesInitialState, {
          business: newBusiness,
          type: types.REGISTER_BUSINESS_SUCCESS
        })
      ).toEqual({
        data: [newBusiness],
        isLoading: false
      });
    });

    it("should handle UPDATE_BUSINESS_SUCCESS", () => {
      businessesInitialState = { data: businesses, isLoading: false };
      const businessToUpdate = {
        id: 3,
        category: "Motorcars",
        location: "Kampala",
        name: "Tesla",
        summary: "A description for this business goes here"
      };

      expect(
        businessesReducer(businessesInitialState, {
          business: businessToUpdate,
          type: types.UPDATE_BUSINESS_SUCCESS
        })
      ).toEqual({
        data: businessesInitialState.data.map(business =>
          business.id === businessToUpdate.id ? businessToUpdate : business
        ),
        isLoading: false
      });
    });

    it("should handle DELETE_BUSINESS_SUCCESS", () => {
      businessesInitialState = { data: businesses, isLoading: false };
      const businessToDelete = {
        id: 3,
        category: "Motorcars",
        location: "Kampala",
        name: "Tesla",
        summary: "A description for this business goes here"
      };

      expect(
        businessesReducer(businessesInitialState, {
          business: businessToDelete,
          type: types.DELETE_BUSINESS_SUCCESS
        })
      ).toEqual({
        data: businessesInitialState.data.filter(
          business => business.id !== businessToDelete.id
        ),
        isLoading: false
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
