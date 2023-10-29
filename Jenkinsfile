pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sshagent(credentials : ['66048915-3217-4de1-af5b-f459d5b93f54']){
          sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.109.200.88 "sh deploy.sh"'
          }
      }
    }

  }
}
