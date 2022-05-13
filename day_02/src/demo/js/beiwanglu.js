const context = document.getElementById('context')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addBtn')
const deleteBtn = document.getElementById('deleteBtn')
const list = document.getElementById('list')

const listContent = []

class renderFurEach {
    reder() {

        let htmlStr = '';
        listContent.forEach((item) => {
            htmlStr = htmlStr + `
            <div class="item"  id='list'>
            <div>
                <p class="weizhitiaozheng">内容:${item.context}</p>
                <p class="weizhitiaozheng">时间:${item.date} ${item.tim}</p>
            </div>
        </div>
            `
        })
        list.innerHTML = htmlStr
    }
}
//新增方法
export function addCreate() {
    const r1 = new renderFurEach
    addBtn.addEventListener('click', () => {
        console.log('点击新增按钮')
        //从上面插入 同样插入的方法还有 push()
        listContent.unshift({
            context: context.value,
            date: date.value,
            time: time.value,
        })
        r1.reder()
    })
}

//删除方法
export function remove() {
    deleteBtn.addEventListener('click', () => {
        //删除最后一行
        listContent.shift()
        //删除第一行
        // listContent.pop()
        r1.reder()
    })
}

