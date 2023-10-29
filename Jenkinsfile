pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sshagent(credentials : ['66048915-3217-4de1-af5b-f459d5b93f54']){
          sh 'git clone "https://github.com/sunder3422/skyhigh-paragliding"'
          sh 'cd skyhigh-paragliding/'
          sh 'npm install'
          sh 'npm run build'
          sh 'cp -rf /build/ /var/www/'
          sh 'cd /var/www/'
          sh 'mv skyhigh-website/ skyhigh2/'
          mv 'build/ skyhigh-website/'
        }
      }
    }

  }
}
