<template>
    <v-layout row>
        <v-flex xs1>
            <v-icon v-on:click="prev()">keyboard_arrow_left</v-icon>
        </v-flex>
        <v-flex xs10>
            <v-menu ref="menu" :close-on-content-click="true" v-model="menu" :nudge-right="40" lazy
                transition="scale-transition" offset-y full-width min-width="290px">
                <v-icon slot="activator" class="cal">calendar_today</v-icon>
                <v-date-picker
                    reactive
                    show-current
                    ref="picker" 
                    v-model="date"  
                    no-title
                    >
                </v-date-picker>
            </v-menu>
        </v-flex>
        <v-flex xs1>
            <v-icon v-on:click="next()">keyboard_arrow_right</v-icon>
        </v-flex>
    </v-layout>
</template>
<script>

    export default {
        data() {
            return {
                menu: false,
                modal: false,
                min: "2018",
                max: "2020",
               
            }
        },
        watch: {
            menu(val) {
                val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
            },
        },
        computed: {
            date: {
                get: function () {
                    return this.$store.state.yearNav.yyyy;
                },
                set: function (newValue) {
                    this.$store.commit("yearNav/change", (newValue.slice(0, -8)));
                },
            }
        },
        methods: {
            prev() {
                if(this.$store.state.yearNav.yyyy !== this.min){
                    this.$store.commit("yearNav/change",(Number(this.$store.state.yearNav.yyyy)-1).toString());
                }
            },
            next() {
                console.log(this.$store.state.yearNav.yyyy + ' and ' + this.max );
                if(this.$store.state.yearNav.yyyy !== this.max){
                    this.$store.commit("yearNav/change",(Number(this.$store.state.yearNav.yyyy)+1).toString());
                }
            },
        },
    };

</script>
<style>
    input {
        width: 100px;
        text-align: center;
    }
    .v-menu {
        text-align: center;
        display: flex;
        justify-content: center;
    }
</style>
