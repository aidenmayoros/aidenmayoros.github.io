var container = document.getElementById('profiles');

console.log('test');
fetch("https://raw.githubusercontent.com/aidenmayoros/aidenmayoros.github.io/master/final-project/profiles.json")
    .then((data) => data.json())
    .then((profiles) => {
        console.log(profiles)

        for (var i = 0; i < profiles.length; i++) {
            var profile = profiles[i];

            // Profile Name
            var name = document.createElement('h1');
            name.innerHTML = profile.name;
            name.classList.add('profile-name');

            // Profile Image
            var image = document.createElement('img');
            image.src = profile.image;
            image.classList.add('profile-image');

            // Profile Certification
            var certification = document.createElement('h3');
            certification.innerHTML = "Certifications: " + profile.certification;
            certification.classList.add('profile-certification');

            // Profile Experience
            var experience = document.createElement('p');
            experience.innerHTML = "<b>Experience:</b> " + profile.experience;
            experience.classList.add('profile-experience');

            // Profile Email
            var email = document.createElement('p');
            email.innerHTML = "<b>Email: </b>" + profile.email;
            email.classList.add('profile-email');

            // Profile Bio
            var bio = document.createElement('p');
            bio.innerHTML = "<b>Info: </b>" + profile.bio;
            bio.classList.add('profile-bio');


            var profileSection = document.createElement('div')
            var newdiv = document.createElement('div');
            newdiv.classList.add('info');
            profileSection.classList.add('profile');

            profileSection.appendChild(name);
            profileSection.appendChild(image);
            profileSection.appendChild(certification);
            newdiv.appendChild(experience);
            newdiv.appendChild(email);
            newdiv.appendChild(bio);

            container.appendChild(profileSection);
            container.appendChild(newdiv);
        }


    });