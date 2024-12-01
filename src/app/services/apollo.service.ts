import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { HttpLink, InMemoryCache } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {
    constructor(private apollo: Apollo, private httpLink: HttpLink) {
    }
  }