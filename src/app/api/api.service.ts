import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { AuthData } from '../models/auth';
import * as _ from 'lodash';



@Injectable()
export class ApiService {

  getBackgroundImage = {
    get: () => this.request
      .get()
      .url('/api/GetImagePath')
  }

  login = {
    post: (data) => this.request
        .post()
        .url('/api/CreateToken')
        .payload(data)
  }

  getAllProjects = {
    get: () => this.request
      .get()
      .url('/api/ActProjects')
  }

  // mobikiStatistics = {
  //   get: () => this.request
  //     .get()
  //     .url('/api/mobiki/statistics')
  //     .auth()
  // };
  //
  // users = {
  //   get: () => this.request
  //     .get()
  //     .url('/api/user')
  //     .auth(),
  //   getCount: () => this.request
  //     .get()
  //     .url('/api/user/getCount')
  //     .auth()
  // };
  //
  // authToken = {
  //   post: (auth: AuthData) => this.request
  //     .post()
  //     .url('/api/auth/token')
  //     .payload(auth)
  // };
  //
  // me = {
  //   get: () => this.request
  //     .get()
  //     .url('/api/me')
  //     .auth()
  // };


  // users = {
  //   get: () => this.request
  //     .get()
  //     .url('/api/users')
  //     .auth(),
  //   post: (user) => this.request
  //     .post()
  //     .url('/api/users')
  //     .payload(user)
  //     .auth()
  // };

  usersById = {
    put: (user) => this.request
      .put()
      .url('/api/users/{}', user.id)
      .payload(user)
      .auth()
  };

  usersByIdRolesById = {
    put: (userId, roleId) => this.request
      .put()
      .url('/api/users/{}/roles/{}', userId, roleId)
      .auth(),
    delete: (userId, roleId) => this.request
      .delete()
      .url('/api/users/{}/roles/{}', userId, roleId)
      .auth()
  };

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 50) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }
  constructor(private request: RequestService) { }

}
