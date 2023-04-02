const { _saveQuestionAnswer, _saveQuestion } = require("./Data");


describe("_saveQuestion", () => {
    it("will be return right parameter", async () => {
      const res = await _saveQuestion({
        optionOneText: "take a course on ReactJS",
        optionTwoText: "take a course on unit testing with Jest",
        author: "tylermcginnis",
      });
      expect(res).toBeTruthy;
    });
  
      it("will be return wrong parameter", async () => {
        const res = await _saveQuestion({
          optionOneText: undefined,
          optionTwoText: "take a course on unit testing with Jest",
          author: "tylermcginnis",
        }).catch((error) => error);
        expect(res).toBe("Please provide optionOneText, optionTwoText, and author");
      });
  });
  
describe("_saveQuestionAnswer", () => {
  it("will return right correct parameter", async () => {
    const res = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: "loxhs1bqm25b708cmbf3g",
      answer: "optionOne",
    });
    expect(res).toBeTruthy();
  });

  it("will return error for wrong parameter", async () => {
    const res = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: undefined,
      answer: "optionOne",
    }).catch((error) => error);

    expect(res).toBe("Please provide authedUser, qid, and answer");
  });
});

