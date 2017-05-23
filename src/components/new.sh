#!/usr/bin/env bash

dir=$(dirname $0)/$1
name=${1}Component

mkdir ${dir}
cd ${dir}
touch ${name}.jsx
touch index.js
touch ${1}.scss

echo "// @flow
import React from 'react';
import './$1.scss';

type $1Props = {};

class $name extends React.Component<*, *, *> {
  props: $1Props;

  render() {
    return (
      <div className=\"$1\"></div>
    );
  }
}

export default $name;" >> ${name}.jsx

echo "import $1 from './$name';

export default $1;" >> index.js

echo "@import '../../index';

.$1 {}" >> ${1}.scss