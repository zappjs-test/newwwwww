const path = require('path');
const webpack = require('webpack');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
