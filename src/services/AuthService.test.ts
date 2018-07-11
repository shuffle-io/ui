import AuthService, { IParams } from "./AuthService";

describe("AuthService", () => {
    let authService: AuthService | null;
    let mockFn: jest.Mock;
    let expectedParams: IParams;
    let queryString: string;

    const auth = () => {
        authService = authService || new AuthService(queryString, mockFn);
        return authService;
    };

    beforeEach(() => {
        authService = null;
        expectedParams = {
            access_token: "a4cc35570k3n",
            account_id: "3",
            account_username: "username",
            expires_in: "1"
        };
        mockFn = jest.fn();
        queryString =
            "#access_token=a4cc35570k3n&account_id=3&account_username=username&expires_in=1";
    });

    describe("constructor", () => {
        it("parses query params", () => {
            const params = auth().params;

            delete params.expires_at;
            expect(params).toEqual(expectedParams);
        });

        it("calculates expiration time", () => {
            const params = auth().params;
            const now: number = new Date().getTime();
            const expected: number = 1000 + now;

            const { expires_at } = params;
            const closeEnough: boolean = !!(
                expires_at &&
                expires_at >= expected - 10 &&
                expires_at <= expected + 10
            );

            expect(closeEnough).toEqual(true);
        });
    });

    describe("handleAuthentication", () => {
        it("should return true when given access token", () => {
            const handled = auth().handleAuthentication();
            expect(handled).toBe(true);
        });

        it("should return false when not given access token", () => {
            queryString = "";
            const handled = auth().handleAuthentication();
            expect(handled).toBe(false);
        });

        it("should call function when given access token", () => {
            auth().handleAuthentication();
            expect(mockFn.mock.calls.length).toEqual(1);
        });

        it("should not call function when not given access token", () => {
            queryString = "";
            auth().handleAuthentication();
            expect(mockFn.mock.calls.length).toEqual(0);
        });
    });
});
