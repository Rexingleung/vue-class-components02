
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const userModule = namespace("storeType");
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @userModule.Action("fetchData") public fetchData!: Function;
  @userModule.Mutation("changeMobile") public changeMobile!: Function;
  @userModule.Mutation("saveUserInfo") public saveUserInfo!: Function;
  @userModule.Getter("fullName") public fullName!: string;
  @userModule.Getter("userInfo") public userInfo!: string;
  @userModule.State("firstName") public firstName!: string;
  @userModule.State("mobile") public mobile!: string;
  created() {
    const userInfo = {
      firstName: "changeFirstName1",
      lastName: "changelastName1",
      mobile: "1111111111111"
    }
    this.fetchData(userInfo)
    console.log(this.fullName, "this.fullName1");
    console.log(this.firstName, "this.firstName1");
    console.log(this.mobile, "this.mobile1");
    console.log('==============');
    const ui = {
      firstName: "changeFirstName",
      lastName: "changelastName",
      mobile: "123456789000"
    };
    this.changeMobile('99999999999');
    console.log(this.mobile, "this.mobile.changeMobile");
    this.saveUserInfo(ui);
    console.log(this.fullName, "this.fullName2");
    console.log(this.firstName, "this.firstName2");
    console.log(this.mobile, "this.mobile2");
  }
}