jest.autoMockOff();

var VoteSessionFactory = require('../src/voteSessionFactory');

describe('voteSessionFactory', function() {

    describe('createVoteSession', function() {
        var candidates = ['Cand1', 'Cand2', 'Cand3', 'Cand4'];

        it('should include all candidates', function() {
            var session = VoteSessionFactory.createVoteSession(candidates, false, 2, 0);
            Object.keys(session.options).forEach(function(key) {
                var cand = session.options[key];
                expect(cand.name).toBe(candidates[cand.id]);
                expect(cand.vacant).toBe(false);
            });
            expect(session.options.length).toBe(candidates.length);
        });

        it('should create the correct number of vacant candidates', function() {
            var maxNumVotes = 2;
            var i = 1;
            var session = VoteSessionFactory.createVoteSession(candidates, true, maxNumVotes, 0);

            Object.keys(session.vacantOptions).forEach(function(key) {
                var cand = session.vacantOptions[key];
                expect(cand.name).toBe('Vakant' + i);
                expect(cand.vacant).toBe(true);
                i++;
            });
            expect(session.vacantOptions.length).toBe(maxNumVotes);
            expect(session.options.length + session.vacantOptions.length).toBe(candidates.length + maxNumVotes);
        });
    });

});
