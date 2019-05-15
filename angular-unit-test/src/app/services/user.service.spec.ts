import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { githubusers } from '../mocks/user.mock';
import { GIT_USERS_API } from '../constants/unit-test.constants';

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        });

        service = TestBed.get(UserService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get data using HTTP GET', () => {
        service.getUsers().subscribe(
            response => {
                expect(response.length).toEqual(1);
                expect(response).toEqual(githubusers);
                console.log('login value: ' + response[0].login);
                expect(response[0].login).toEqual('ranjith');
            }
        );

        const userReq = httpMock.expectOne(GIT_USERS_API);
        expect(userReq.request.method).toBe('GET');

        userReq.flush(githubusers);
    });

});
