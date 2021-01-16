// Create a function that takes a string and 'urlifies' it by:
// 1. Removing spaces and replacing with hyphens
// 2. Removing all punctuation
// 3. Making all letters lowercase
// Use regex and string prototype functions

function urlify(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9\s\-]/g, '').replace(/\s/g, '-').replace(/(^-|-$)/g, '');
}

// Would pre-existing dashes be removed or kept? Currently being kept. To remove, remove \- from first replace.
// Last replace would remove dashes that start and/or end the string. Also empty spaces, since those would turn into dashes in the prior replace.