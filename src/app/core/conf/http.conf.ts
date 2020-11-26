import {environment} from '../../../environments/environment';

export class HttpConf {

  public static REST_API = environment.restApi;

  public static URL = {

    posts: `${HttpConf.REST_API}/posts`

  };

}
