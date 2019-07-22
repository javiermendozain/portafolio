import React from 'react';
import Editor from 'for-editor';

const newBlogLayout = (props) => {

  var text='';

  const handleChange = (value) =>{
    text = value;

  };

  return (
    <div>
      <Editor value={text} onChange={handleChange} />
    </div>
  );

};

export default newBlogLayout;
