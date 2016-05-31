Match._id = Match.Where(id => {
  check(id, String);
  return /^[a-zA-Z0-9]{17,17}/.test(id); 
});

// BrowserPolicy.content.allowOriginForAll('blob:');

//   var trusted = [
//       '*.googleapis.com',
//       '*.gstatic.com',
//       '*.youtube.com',
//       '*.cloudinary.com'
//   ];

//   _.each(trusted, function(origin) {
//       origin = "https://" + origin;
//       BrowserPolicy.content.allowOriginForAll(origin);
//   });

