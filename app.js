const addNewScheduleBtn=document.querySelector('.btn--add-schedule');
const schedulesItems=Array.from(document.querySelectorAll('.schedules-item'));
const scheduleForm=document.querySelector('.schedule-form');
const closeForm=document.querySelector('.btn--form-cancel');
const schedulesDetailsExpand=Array.from(document.querySelectorAll('.schedules-details--expand'));
const scheduleEditBtn=Array.from(document.querySelectorAll('.btn--edit'));
const scheduleDeleteBtn=Array.from(document.querySelectorAll('.btn--delete'));
const scheduleUpBtn=Array.from(document.querySelectorAll('.btn--img-up'));

schedulesItems.forEach((val,index)=>{
    console.log(val);
    val.addEventListener('click',()=>{
        schedulesDetailsExpand[index].classList.toggle('collapsed');
        scheduleEditBtn[index].classList.toggle('hidden');
        scheduleDeleteBtn[index].classList.toggle('hidden');
        scheduleUpBtn[index].classList.toggle('rotate-180');
    });
});

addNewScheduleBtn.addEventListener('click',()=>{
    scheduleForm.classList.remove('hidden');
});

closeForm.addEventListener('click',()=>{
    scheduleForm.classList.add('hidden');
});

