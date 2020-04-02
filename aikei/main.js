document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('MenuBtn').addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('SpanNav').classList.toggle('active');
    })
})