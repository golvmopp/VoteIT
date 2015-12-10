# VoteIT [![Build Status](https://travis-ci.org/cthit/VoteIT.svg)](https://travis-ci.org/cthit/VoteIT)
A voting system for student Division Meeting (Sektionsmöte).

### Features
* Anonymous voting.
* Allows set amount of options to be accepted (eg, allow 3 options out of 5 to be accepted). So if the amount of allowed options is 2 and the options are "Agda", "Haskell" and "Erlang" both "Agda" and "Haskell" could be chosen. (personinval där en kommitté har limiterat antal platser)

### Physical requirements
* Scissor
* Own printer

### Technical requirements of the project
* Anonymity
* Security for man in the middle.
* Security for session hijacking.

## Usage

[Setup Instructions](https://github.com/cthit/VoteIT/wiki/Setup-Instructions-for-Vote-Counters)

[User Instructions](https://github.com/cthit/VoteIT/wiki/User-Instructions)


### Voting
* Vote counter: When its time for election choose the right type and options
* Vote counter: Pick a time limit, 15 min is recommended
* ALL: Will see that there is an election
* ALL: Choose the option(s) that you want and enter the one-time-use code for the election

### End
* Vote counter: Check the log for suspicions activity eg more deployments
* Vote counter: Destroy the server
* Vote counter: Destroy the forked VoteIT 

## Development

### Software requirements
* node
* npm

### Build
* `npm start`
* `gulp js`

### How to use Docker (optional)
* `docker build -t cthit/voteit .`
* `docker run cthit/voteit`
