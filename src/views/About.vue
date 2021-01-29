<template>
  <div class="about">
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-input placeholder="Barcode" v-model="input"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-input placeholder="NetID" v-model="input"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-input placeholder="NNumber" v-model="input"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-input placeholder="First Name" v-model="input"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-input placeholder="Last Name" v-model="input"></el-input>
      </el-col>
    </el-row>
    <div class="center">
      <el-button type="danger" plain>Clear</el-button>
      <el-button type="success" plain>Create user / Loading</el-button>
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.el-row {
  margin: 1rem;
}
</style>