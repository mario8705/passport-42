/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var profile = {};
  profile.id = String(json.id);
  profile.username = json.login;
  profile.displayName = json.displayname;
  profile.name = { familyName: json.name.last_name,
                   givenName: json.name.first_name };
  profile.profileUrl = json.url;
  profile.emails = [{ value: json.email }];
  profile.phoneNumbers = [{ value: json.phone }];
  profile.photos = [{ value: json.image_url }];

  return profile;
};
