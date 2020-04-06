<template>
  <div>
    <div v-if="errorFlag" style="color: red;">
      {{ error }}
    </div>

    <!-- <div id="users">
      <table>
        <tr v-for="user in users">
          <td>{{ user.username }}</td>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      errorFlag: false,
      users: [],
    };
  },
  mounted: function () {
    this.getUsers();
  },
  method: {
    getUsers: function () {
      this.$http.get("http://localhost/api/users").then(
        function (response) {
          this.users = response.data;
        },
        function (error) {
          this.error = error;
          this.errorFlag = true;
        }
      );
    },
  },
};
</script>
