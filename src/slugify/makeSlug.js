import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true, strict: true });

export default makeSlug;
