chmod u+x test-run.sh # x = execution access and u = current user so the flag u+x => grants execution access (x) to current user (u)
which bash
#!/usr/bin/env bash

echo "Raisa is Awesome!"


# https://www.baeldung.com/linux/bash-shebang-lines
# used as the first line in script files to specify an interpreter that executes commands present in the file = #!
# use which env or which bash 
# "#!/usr/bin/env bash" => uses the env command to display the environment variables present in the system and then execute commands with the defined interpreter.

