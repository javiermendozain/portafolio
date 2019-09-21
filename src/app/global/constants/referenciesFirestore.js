export const root = ({
  root:{
    users: {
      ref:()=>'USERS',
      profile:{
        ref:()=>'PROFILE'
      },
      historyLog:{
        ref: ()=>'HISTORY_LOG'
      }
    },
    posts: {
      ref: () => 'POSTS'
    },
    category: {
      ref: () => 'CATEGORIES'
    },
    tags: {
      ref: () => 'TAGS'
    }

  }
});
