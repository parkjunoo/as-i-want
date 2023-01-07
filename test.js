class {
  player_name = "B_v4";
  offence = -1;
  learning_ratio = 1.0;
  discount_ratio = 1.0;
  before_score = 0;
  before_res_score = 0;
  actions = [[0,0], [0, 2], [2, 0], [2, 2], [0, 1], [1, 0], [1, 2], [2, 1], [1, 1], [3,3]];
  action_pos = [[{'s': 0.811, 'b': (1.0/10.0)*(5.0/9.0), 'single_hit': (2.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.811, 'b': (1.0/10.0)*(5.0/9.0), 'single_hit': (2.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.811, 'b': (1.0/10.0)*(5.0/9.0), 'single_hit': (2.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.811, 'b': (1.0/10.0)*(5.0/9.0), 'single_hit': (2.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.767, 'b': (1.0/10.0)*(1.0/3.0), 'single_hit': (2.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.767, 'b': (1.0/10.0)*(1.0/3.0), 'single_hit': (2.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.767, 'b': (1.0/10.0)*(1.0/3.0), 'single_hit': (2.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.767, 'b': (1.0/10.0)*(1.0/3.0), 'single_hit': (2.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.7, 'b': 0, 'single_hit': 2.0/10.0, 'hrun': 1.0/10.0},
                      {'s': 0.1, 'b': 0.9, 'single_hit': 0, 'hrun': 0}],
                  [{'s': 0.767, 'b': 0, 'single_hit': (3.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.767, 'b': 0, 'single_hit': (3.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.767, 'b': 0, 'single_hit': (3.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.767, 'b': 0, 'single_hit': (3.0/10.0)*(4.0/9.0), 'hrun': (1.0/10.0)*(4.0/9.0)}, 
                      {'s': 0.7, 'b': 0, 'single_hit': (3.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.7, 'b': 0, 'single_hit': (3.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.7, 'b': 0, 'single_hit': (3.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.7, 'b': 0, 'single_hit': (3.0/10.0)*(2.0/3.0), 'hrun': (1.0/10.0)*(2.0/3.0)},
                      {'s': 0.6, 'b': 0, 'single_hit': 3.0/10.0, 'hrun': 1.0/10.0},
                      {'s': 0.544, 'b': 0.1 + (4.0/10.0)*(5.0/9.0) + (4.0/10.0)*(1.0/3.0), 'single_hit': 0, 'hrun': 0}]]; // action pos
  action_counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  s_values; // s values estimated by monte
  tmp_s_values; // total s values
  tmp_s_values_counter;
  policy(ball_count, runner) {
      let offence = this.offence;
      let strike = ball_count.s;
      let ball = ball_count.b;
      let out = ball_count.o;
      let max_action_index = [];
      let max_action_val = -1000;
      for (let i = 0; i < 10; i++) {
          let s_p = this.action_pos[offence][i]['s'];
          let b_p = this.action_pos[offence][i]['b'];
          let sh_p = this.action_pos[offence][i]['single_hit'];
          let hr_p = this.action_pos[offence][i]['hrun'];
          let t_val;
          let s_val;
          if (strike == 2) {
              s_val = s_p * this.s_values[offence][0][ball][out+1][runner];
          } else {
              s_val = s_p * this.s_values[offence][strike+1][ball][out][runner];
          }
          let b_val;
          if (ball == 3) {
              b_val = b_p * this.s_values[offence][strike][0][out][runner+1];
          } else {
              b_val = b_p * this.s_values[offence][strike][ball+1][out][runner];
          }
          let sh_val = sh_p * this.s_values[offence][strike][ball][out][runner+1];
          let hr_val = hr_p * this.s_values[offence][strike][ball][out][0];
          t_val = hr_val + sh_val + b_val + s_val;
          if (t_val > max_action_val) {
              max_action_index = [];
              max_action_index.push(i);
              max_action_val = t_val;
          } else if (t_val == max_action_val) {
              max_action_index.push(i);
          }
      }
      let pos = Math.floor(Math.random() * max_action_index.length);
      this.action_counter[max_action_index[pos]] += 1;
      return this.actions[max_action_index[pos]];
  }

  onGameStart() {
      const s_values = [];
      const tmp_s_values = [];
      const tmp_s_values_counter = [];
      for (let i = 0; i < 2; i++) { // offence
          s_values[i] = new Array(4);
          tmp_s_values[i] = new Array(4);
          tmp_s_values_counter[i] = new Array(4);
          for (let j = 0; j < 4; j++) { // strike
              s_values[i][j] = new Array(5);
              tmp_s_values[i][j] = new Array(5);
              tmp_s_values_counter[i][j] = new Array(5);
              for (let k = 0; k < 5; k++) { // ball 
                  s_values[i][j][k] = new Array(4);
                  tmp_s_values[i][j][k] = new Array(4);
                  tmp_s_values_counter[i][j][k] = new Array(4);
                  for (let o = 0; o < 4; o++) { // out
                      s_values[i][j][k][o] = new Array(5);
                      tmp_s_values[i][j][k][o] = new Array(5);
                      tmp_s_values_counter[i][j][k][o] = new Array(5);
                      for (let r = 0; r < 5; r++) { // runner
                          s_values[i][j][k][o][r] = 1.0;
                          tmp_s_values[i][j][k][o][r] = 0.0;
                          tmp_s_values_counter[i][j][k][o][r] = 0.0;
                      }
                  }
              }
          }
      }
      const a = [];
      for (let i = 0; i < 2; i++) { // offence
          a[i] = new Array(4);
          for (let j = 0; j < 4; j++) { // strike
              a[i][j] = new Array(5);
              for (let k = 0; k < 5; k++) { // ball 
                  a[i][j][k] = new Array(4);
                  for (let o = 0; o < 4; o++) { // out
                      a[i][j][k][o] = new Array(5);
                      for (let r = 0; r < 5; r++) { // runner
                          a[i][j][k][o][r] = 1.0;
                      }
                  }
              }
          }
      }
      this.s_values = s_values;
      this.tmp_s_values = tmp_s_values;
      this.tmp_s_values_counter = tmp_s_values_counter;
      console.log(a);
      console.log(this.s_values);
  }

  onRoundStart() {
  }

  onTurnStart(data) {
      if (data.is_offence) {
          this.offence = 1;
      } else {
          this.offence = 0;
      }
      let ret = this.policy(data.ball_count, data.runner);
      return ret;
  }

  onTurnEnd(result) {
      let current_score;
      if (this.offence) {
          current_score = result.score - this.before_res_score + result.result;
      } else {
          // problem of underestimated res score
          current_score = 1/(result.score - this.before_res_score + 0.1) + 3 - result.result;
      }
      let diff_score = current_score - this.before_score;
      this.before_score = current_score;
      // for now, just use discount ratio as 1.0
      let b_cnt = result.ball_count;
      this.tmp_s_values_counter[this.offence][b_cnt['s']][b_cnt['b']][b_cnt['o']][result.runner] += 1.0;
      this.tmp_s_values[this.offence][b_cnt['s']][b_cnt['b']][b_cnt['o']][result.runner] += diff_score;
      this.s_values[this.offence][b_cnt['s']][b_cnt['b']][b_cnt['o']][result.runner] = 
          this.tmp_s_values[this.offence][b_cnt['s']][b_cnt['b']][b_cnt['o']][result.runner] / this.tmp_s_values_counter[this.offence][b_cnt['s']][b_cnt['b']][b_cnt['o']][result.runner];
  }

  onRoundEnd(result) {
      console.log(this.action_counter);
  }

  onGameEnd(result) {
  }
}